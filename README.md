## **README - Micro Frontends with `Redux` and `Module Federation` Integration**

### **Project Overview**

In the last two days, I have integrated a **centralized Redux store** and `Module Federation` into the architecture of this application, allowing seamless communication between the **host** application and its **mini frontends**. This setup ensures that shared state management is handled via Redux, while `Module Federation` enables dynamic loading of micro frontends in the host app. While the state flow works from the **host** to the **mini components**, an issue arose with state propagation from the **mini frontends** to the **host** due to a `reduxContext` being _null_ in the mini apps.

### **What Was Done**

#### 1. **Centralized Redux Store in Host**
   - A **centralized Redux store** was created in the **host application** to manage the shared state for the entire application, including the mini frontends.
   - The Redux store was configured with **actions** and **reducers** to handle state changes.
   - The **host** app uses `<Provider>` from `react-redux` to make the Redux store accessible to all components in the **host** and **mini frontends**.

#### 2. **Module Federation Configuration**
   `Module Federation` was the cornerstone of this project, enabling the dynamic loading of micro frontends into the **host** app. The configuration was carried out in both the **host** and **mini frontends** to ensure proper sharing of modules between them.

   ##### **Host Configuration:**
   - The **host** application is responsible for loading the **mini frontends** dynamically using `Webpack's Module Federation Plugin`.
   - The **host** exposes a container and configuration for the **mini frontends**, specifying which remote components to load.
   - The `Module Federation Plugin` is configured in the Webpack configuration of the **host** to enable sharing of relevant components and utilities with the **mini frontends**.
   - The **host** app is able to **consume** exposed modules from each mini frontend, such as UI components, utilities, or state management functionality.

   ##### **Mini Frontend Configuration:**
   - Each **mini frontend** was set up with the `Module Federation Plugin` to allow them to be **consumed** by the **host**.
   - The **mini frontends** expose specific components and configurations, which are then loaded dynamically into the **host**.
   - The **mini frontends** are also configured to **consume** shared modules (like Redux actions, reducers, or UI components) from the **host**, ensuring consistency across the application.
   - **Dynamic loading** of these components is achieved using `import()` statements and the **remote module** configuration in Webpack, which allows mini apps to load only when needed.

#### 3. **State Flow Issue**
   - The state is successfully flowing from the **host** to the **mini components**. However, I encountered an issue where state changes in the **mini frontends** are not reflecting back to the **host**.
   - Upon investigating, I found that the `reduxContext` in the **mini components** is _null_, preventing the updates from propagating back to the **host**.

### **Steps Taken for Configuration**

1. **Host Configuration:**
   - The Redux store is initialized and provided to all components inside the **host** app using `<Provider store={store}>`.
   - `Module Federation` is configured in Webpack to enable dynamic loading of **mini frontends** as **remote modules**. This allows the **host** app to load and share components, utilities, and even state with the mini frontends.
   - The **host** defines the entry points and **exposes** modules to be consumed by the mini frontends.

2. **Mini Frontend Configuration:**
   - Each **mini frontend** is wrapped with the `Provider` to ensure access to the Redux store.
   - The `Module Federation Plugin` in Webpack is configured to expose and consume modules for state management and components.
   - The **mini frontends** expose reusable components that the **host** consumes dynamically, ensuring modularity and scalability.
   - The **mini frontends** consume shared Redux actions, reducers, and components, which are essential for maintaining consistent state across the application.

3. **State Access:**
   - State was accessed in the **mini frontends** using `useSelector` and modified using `useDispatch`.
   - Actions were dispatched in the **mini components** and their effects observed in the **host**, but the reverse communication was problematic due to the `reduxContext` issue.

### **Challenges Faced**

- **State Flow Direction:**
  The primary challenge I encountered was with the state flow. While the **host** was able to send data to the **mini frontends**, the state changes from the **mini frontends** were not reflecting in the **host**. This was due to the `reduxContext` being _null_ in the **mini components**, blocking the updates from propagating.

- **Module Federation Integration:**
  Setting up `Module Federation` for dynamic loading of the mini frontends and ensuring they communicate with the host was challenging. It required careful configuration of both the **host** and **mini frontends** to ensure they can share components and dependencies efficiently.

### **Achievements**

- Successfully integrated **Redux store** with a `micro frontend architecture`.
- Configured `Module Federation` to dynamically load **mini frontends** into the **host** app, providing a scalable solution for micro frontend architecture.
- Managed to set up **centralized state** in the **host**, with **mini frontends** capable of accessing and interacting with the shared state.
- Identified the issue with the state propagation and set the groundwork for fixing the `reduxContext` issue.

### **Next Steps**

- I will continue to investigate the `reduxContext` null issue and work on debugging the state propagation from the **mini components** back to the **host**.
- Further optimizations will be made to improve the state management and ensure smooth communication across all components in the system.

### **Acknowledgments**

I would like to thank the company for providing such an exciting and challenging project. I am eager to continue working on this and resolving any issues that arise to ensure the success of the application. I am committed to addressing the bugs and making further improvements as I continue with this task.

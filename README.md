## **README - Micro Frontends with Redux Integration**

### **Project Overview**

In the last two days, I have been working on integrating a centralized Redux store into a **micro frontend architecture**. The goal of this project is to manage application state effectively and provide seamless communication between the **host** and its **mini frontends**. The Redux store has been configured within the **host** application to allow the **mini frontends** to access shared state. However, an issue arose where the state flow works from the host to the mini components but not from the mini components to the host. The problem is related to the `reduxContext` being _null_ in the mini frontends.

### **What Was Done**

#### 1. **Centralized Store in Host**
   - I created a **centralized Redux store** in the **host application** to manage the shared state for the entire application, including the mini frontends.
   - The store was configured with **actions** and **reducers** to handle state changes.
   - The Redux store was integrated into the **host** using `<Provider>` from `react-redux`, enabling access to the store for all components in the **host**.

#### 2. **Access to Mini Frontends**
   - I configured the **mini frontends** to have access to the centralized store.
   - The **mini applications** were connected to the Redux store by wrapping them with the `Provider` in their entry points, allowing them to interact with the store.
   - I ensured that the **mini applications** could **dispatch actions** to the Redux store and **read** from the store using the `useSelector` and `useDispatch` hooks provided by `react-redux`.

#### 3. **State Flow Issue**
   - The state is successfully flowing from the **host** to the **mini components**. However, I encountered an issue where state changes in the **mini frontends** are not reflecting back to the **host**.
   - Upon investigating, I found that the `reduxContext` in the **mini components** is _null_, preventing the updates from propagating back to the host.

### **Steps Taken for Configuration**

1. **Host Configuration:**
   - The Redux store is initialized and provided to all components inside the **host** app using `<Provider store={store}>`.
   
2. **Mini Frontend Configuration:**
   - Each **mini frontend** was wrapped with the `Provider` to ensure access to the Redux store.
   - I ensured the `Provider` was correctly placed in the **mini app entry file** to ensure that the state could be accessed and manipulated as needed.

3. **State Access:**
   - State was accessed in the **mini frontends** using `useSelector` and modified using `useDispatch`.
   - Actions were dispatched in the **mini components** and their effects observed in the **host**, but the reverse communication was problematic due to the `reduxContext` issue.

### **Challenges Faced**

- **State Flow Direction:**
  The primary challenge I encountered was with the state flow. While the **host** was able to send data to the **mini frontends**, the state changes from the **mini frontends** were not reflecting in the **host**. This was due to the `reduxContext` being _null_ in the **mini components**, blocking the updates from propagating.

- **Redux Context Handling:**
  I have traced the issue to how the `Provider` context is being shared between the **host** and **mini frontends**, and I plan to work on resolving this issue by ensuring proper context propagation and reconfiguration of the Redux setup.

### **Achievements**

- Successfully integrated **Redux store** with a **micro frontend architecture**.
- Managed to set up **centralized state** in the **host**, with **mini frontends** capable of accessing and interacting with the shared state.
- Identified the issue with the state propagation and set the groundwork for fixing the `reduxContext` issue.

### **Next Steps**

- I will continue to investigate the `reduxContext` null issue and work on debugging the state propagation from the **mini components** back to the **host**.
- Further optimizations will be made to improve the state management and ensure smooth communication across all components in the system.

### **Acknowledgments**

I would like to thank the company for providing such an exciting and challenging project. I am eager to continue working on this and resolving any issues that arise to ensure the success of the application. I am committed to addressing the bugs and making further improvements as I continue with this task.

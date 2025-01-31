import React, { lazy, Suspense } from "react";
// const Email = lazy(() => import("emailApp/Email"));
import Email from "emailApp/Email"

function EmailApp() {
  return (
    <div>
      {/* <Suspense> */}
        <Email />
      {/* </Suspense> */}
    </div>
  );
}

export default EmailApp;

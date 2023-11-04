import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
  } from "@clerk/nextjs";
   
  function UserButtons() {
    return (
      <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
        
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </header>
    );
  }

  export default UserButtons()
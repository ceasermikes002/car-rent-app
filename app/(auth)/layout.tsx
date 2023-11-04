const AuthLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <main className="flex items-center justify-center py-10">
        {children}
      </main>
    );
  }
   
  export default AuthLayout;
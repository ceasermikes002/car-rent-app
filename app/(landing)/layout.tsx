const LandingLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return (
      <main className="bg-[#E8E4C9]">
        <div className="mx-auto h-full w-full">
          {children}
        </div>
      </main>
     );
  }
   
  export default LandingLayout;
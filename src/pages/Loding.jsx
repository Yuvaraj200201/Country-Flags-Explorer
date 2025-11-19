const Loding = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-xl font-bold">
        <div className="animate-spin rounded-full border-t-4 border-b-4 h-10 w-10 border-blue-600"></div>
        <p className="animate-bounce rounded-full text-blue-600 self-center mt-4">Loding</p>
    </div>
  )
};

export default Loding;

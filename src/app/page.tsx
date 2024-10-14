import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="text-3xl font-bold text-center py-4">Homepage</div>
      <div>
        <h1 className="flex justify-center text-3xl font-bold text-gray-500">Wel Come to Z School System</h1>
      </div>
      <div className="flex justify-center gap-4 p-4 font-bold">
        <Link href={"/admin"}>Admin DashBoard</Link>
        <Link href={"/teacher"}>Teachers DashBoard</Link>
        <Link href={"/student"}>Students DashBoard</Link>
        <Link href={"/parent"}>Parents DashBoard</Link>
      </div>
    </div>
  );
};

export default Homepage;

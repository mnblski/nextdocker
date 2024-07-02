import { Button } from "@/components/ui/Button";

export const revalidate = 0;

const getAllUsers = async () => {
  const response = await fetch("http://10.32.217.126:8080/v1/user", {
    // cache: "no-store", // Ensure data is not cached
  });
  return await response.json();
};

export default async function Page() {
  const { data, total_count } = await getAllUsers();

  return (
    <div>
      USERS {total_count}
      <div>
        <p>Local: {process.env.NEXT_PUBLIC_LOCAL}</p>
        <p>Mode: {process.env.NEXT_PUBLIC_MODE}</p>
        <p>Node env: {process.env.NODE_ENV}</p>
        <Button variant="default">Default</Button>
      </div>
    </div>
  );
}

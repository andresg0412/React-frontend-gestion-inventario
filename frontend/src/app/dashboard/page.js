import { cookies } from "next/headers";
import { trace } from "next/dist/trace";
import { verifyToken } from "@/utils/auth";

export default async function Dashboard() {
    const cookieStore = cookies();
    const token = cookieStore.get('auth')?.value;
    let user;
    if (token) {
        try {
            user = await verifyToken(token);
        } catch (error) {
            return (
                <div>
                    <h1>Dashboard</h1>
                    <p>No autorizado</p>
                </div>
            )
        }
    } else {
        return (
            <div>
                <h1>Dashboard</h1>
                <p>No autorizado</p>
            </div>
        )
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Welcome, {user.username}</p>
        </div>
    )
};

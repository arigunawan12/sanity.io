import { createClient } from "next-sanity";

export async function getProjects() {
    const client = createClient({
        projectId:"fs2d27zd",
        dataset:"production",
        apiVersion:"2023-03-06",
    });
}
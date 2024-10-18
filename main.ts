/*
    Basic server for sending files to client
*/

import { serveDir, serveFile } from "@std/http/file-server";

// Internal Deno process to serve files
// See: https://docs.deno.com/examples/http-server-files/
Deno.serve((request: Request) => {

    const pathname = new URL(request.url).pathname;

    // Serve main index.html file
    if (pathname === "/") {
        return serveFile(request, "./challenges/index.html");
    }

    // Try serve another index.html files
    try {

        // Serve static files, similar to Oak's "send"
        if (pathname.startsWith("/static")) {
            return serveDir(request, {
                fsRoot: "build",
                urlRoot: "static",
            });
        }

        // Serve main files
        return serveDir(request, {
            fsRoot: "challenges",
        });

    } catch {
        return new Response("404: Not Found", {
            status: 404,
        });
    }
});

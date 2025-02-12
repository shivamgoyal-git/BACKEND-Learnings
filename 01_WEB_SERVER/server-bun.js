import { serve } from 'bun'

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response(`Welcome to shivam's server`, { status: 200 })
        } else if (url.pathname === '/about') {
            return new Response(`Hey, my name is Shivam Goyal`, { status: 200 })
        } else {
            return new Response(`404 NOT FOUND:(`, { status: 404 })
        }

    },
    port: 3000,
    hostname: `127.0.0.1`
})
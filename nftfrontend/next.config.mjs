/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        IPFSPROJECTID: "673400ff0fce48038536a22f4d346bcd",
        IPFSSECRET: "Wx6dppEsz0yJvCC8k/f1RVEfKILuFSuEYcs9VAYIAQLJrWquoNuaHg",
        PINATA_API_KEY: "b12aee05cc3ab8f63a82",
        PINATA_API_SECRET: "06133b80bd0c77580aa428818e0b08eb4ec7155c7641faa121b0036384224dea",
        PINATA_JWT: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI3MjcyNzY3YS1iOTlhLTQwYzMtOTY2My02YTc0ODMzNjdmYTciLCJlbWFpbCI6ImFsZmF6YWxyZWlnbnM0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJiMTJhZWUwNWNjM2FiOGY2M2E4MiIsInNjb3BlZEtleVNlY3JldCI6IjA2MTMzYjgwYmQwYzc3NTgwYWE0Mjg4MThlMGIwOGViNGVjNzE1NWM3NjQxZmFhMTIxYjAwMzYzODQyMjRkZWEiLCJpYXQiOjE3MDkzNzUwOTd9.5DzfhoWoLoQ3nxSkixyKnHC4Ncp0CMjOk_YJRyODqiY",
        PINATADOMAIN: "gray-certain-bison-693.mypinata.cloud"
    },
    images: {
        domains: ['gray-certain-bison-693.mypinata.cloud', 'ifps'],
    },
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
    },
    experimental: {
        missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;

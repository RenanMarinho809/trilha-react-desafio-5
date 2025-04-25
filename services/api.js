import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ahcpgtidbhglrknnqgkz.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoY3BndGlkYmhnbHJrbm5xZ2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODQ4NTYsImV4cCI6MjA2MTE2MDg1Nn0.q17c23l5cbvM2tjCENvHDmYwKmXVOQC2fytq5LNp78k",
        Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFoY3BndGlkYmhnbHJrbm5xZ2t6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1ODQ4NTYsImV4cCI6MjA2MTE2MDg1Nn0.q17c23l5cbvM2tjCENvHDmYwKmXVOQC2fytq5LNp78k"
    }
})
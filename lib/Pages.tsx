import React from "react";
import Lectures from "../src/Pages/Lectures.tsx";
import Home from "../src/Pages/Home.tsx";
import RickAndMortyDetailsPage from "../src/Pages/RickAndMortyDetailsPage.tsx";
import PageNotFound from "../src/Components/PageNotFound.tsx";
import TodoApp from "../src/Pages/TodoApp.tsx";

export type page = {
    href: string;
    params: string;
    title: string;
    element: React.ReactNode;
}

export const Pages: page[] = [
    {href: "/", params: "", title: "Home", element: <Home/>},
    {href: "/lectures", params: "", title: "Lectures", element: <Lectures/>},
    {
        href: "/lectures/r&m-details",
        params: "/:id",
        title: "Rick and Morty Details",
        element: <RickAndMortyDetailsPage/>
    },
    {href: "/*", title: "Page Not Found", params: "", element: <PageNotFound/>},
    {href: "/todoApp", params: "", title: "Todo-App", element: <TodoApp/>},
]

export const NavPages: page[] = [
    {href: "/", params: "", title: "Home", element: <Home/>},
    {href: "/lectures", params: "", title: "Lectures", element: <Lectures/>},
    {href: "/todoApp", params: "", title: "Todo-App", element: <TodoApp/>},
]
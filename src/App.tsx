import './App.css'
import "@radix-ui/themes/styles.css";
import {Theme} from "@radix-ui/themes";
import {ThemeProvider} from "next-themes";
import Layout from "./Layout.tsx";
import {Route, Routes} from "react-router-dom";
import {Pages} from "../lib/Pages.tsx";


function App() {


    return (
        <ThemeProvider attribute={"class"}>
            <Theme accentColor={"amber"} radius={"medium"} panelBackground={"translucent"}>
                <Layout>
                    <Routes>
                        {Pages.map(page => (
                            <Route key={page.href} path={page.href + page.params} element={page.element}/>
                        ))}
                    </Routes>
                </Layout>
            </Theme>
        </ThemeProvider>
    )
}

export default App

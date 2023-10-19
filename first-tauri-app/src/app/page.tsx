import Image from "next/image";
import Head from "next/head";
import CodeBlock from "./CodeBlock";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1 className=" text-[#FFA500] text-[32px] font-semibold">
          {" "}
          Steps To Create Tauri App
        </h1>
        <ul className=" m-8 ml-10 text-[24px] text-[#000000]">
          <li>
            <span className=" text-[30px]">Prerequisites</span>
          </li>
          <li>Installing <span><Link href={"https://visualstudio.microsoft.com/visual-cpp-build-tools/"}><i>Microsoft Visual Studio C++ Build Tools</i></Link></span></li>
          <li>Installing <i>WebView2</i></li>
          <li>Installing <span><Link href={"https://www.rust-lang.org/tools/install"}><i>Rust</i></Link></span></li>
          <li>Now...</li>
          <li>Create the frontend</li>
          <CodeBlock sign={"$"} code={"yarn create next-app --typescript my-project"}/>
          <li>Update Next Config</li>
          <CodeBlock sign={" "} code={"\n   /** @type {import('next').NextConfig} */\n   const nextConfig = {output: 'export',}\n   module.exports = nextConfig"} />
          <li>Create the Rust Project</li>
          <CodeBlock sign={"$"} code={"yarn add -D @tauri-apps/cli"}/>
          <li>Initialise</li>
          <CodeBlock sign={"$"} code={"yarn tauri init"}/>
          <li>Run you app</li>
          <CodeBlock sign={"$"} code={"yarn tauri dev"} />        
        </ul>
      </div>
    </main>
  );
}

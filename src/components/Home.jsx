import React from 'react'

const Home = () => {
  return (
    <div id='home' className=''></div>
  )
}

export default Home;

// <!-- Section: Design Block -->
// <section class="background-radial-gradient mb-40">
//   <style>
//     .background-radial-gradient {
//       background-color: hsl(218, 41%, 15%);
//       background-image: radial-gradient(650px circle at 0% 0%,
//           hsl(218, 41%, 35%) 15%,
//           hsl(218, 41%, 30%) 35%,
//           hsl(218, 41%, 20%) 75%,
//           hsl(218, 41%, 19%) 80%,
//           transparent 100%),
//         radial-gradient(1250px circle at 100% 100%,
//           hsl(218, 41%, 45%) 15%,
//           hsl(218, 41%, 30%) 35%,
//           hsl(218, 41%, 20%) 75%,
//           hsl(218, 41%, 19%) 80%,
//           transparent 100%);
//     }
//   </style>

//   <!-- Navbar -->
//   <nav
//     class="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30 lg:flex-wrap lg:justify-start"
//     data-te-navbar-ref>
//     <!-- Container wrapper -->
//     <div class="flex w-full flex-wrap items-center justify-between px-6">
//       <div class="flex items-center">
//         <!-- Toggle button -->
//         <button
//           class="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
//           type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
//           aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="[&>svg]:w-7">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
//               <path fill-rule="evenodd"
//                 d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                 clip-rule="evenodd" />
//             </svg>
//           </span>
//         </button>

//         <!-- Navbar Brand -->
//         <a class="text-primary dark:text-primary-400" href="#!">
//           <span class="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//               stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round"
//                 d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
//             </svg>
//           </span>
//         </a>
//       </div>

//       <!-- Collapsible wrapper -->
//       <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
//         id="navbarSupportedContentY" data-te-collapse-item>
//         <!-- Left links -->
//         <ul class="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
//           <li data-te-nav-item-ref>
//             <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
//               href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"
//               disabled>Dashboard</a>
//           </li>
//           <li data-te-nav-item-ref>
//             <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
//               href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Team</a>
//           </li>
//           <li class="mb-2 lg:mb-0" data-te-nav-item-ref>
//             <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
//               href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Projects</a>
//           </li>
//         </ul>
//         <!-- Left links -->
//       </div>
//       <!-- Collapsible wrapper -->

//       <!-- Right elements -->
//       <div class="my-1 flex items-center lg:my-0 lg:ml-auto">
//         <button type="button"
//           class="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
//           data-te-ripple-init data-te-ripple-color="light">
//           Login
//         </button>
//         <button type="button"
//           class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//           data-te-ripple-init data-te-ripple-color="light">
//           Sign up for free
//         </button>
//       </div>
//       <!-- Right elements -->
//     </div>
//     <!-- Container wrapper -->
//   </nav>
//   <!-- Navbar -->

//   <!-- Jumbotron -->
//   <div class="px-6 py-12 text-center md:px-12 lg:text-left">
//     <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
//       <div class="grid items-center gap-12 lg:grid-cols-2">
//         <div class="mt-12 lg:mt-0">
//           <h1 class="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
//             The best offer <br /><span class="text-[hsl(218,81%,75%)]">for your business</span>
//           </h1>
//           <a class="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
//             data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
//           <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-200 focus:text-neutral-200 focus:outline-none focus:ring-0 active:text-neutral-300"
//             data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
//         </div>
//         <div class="mb-12 lg:mb-0">
//           <img src="https://tecdn.b-cdn.net/img/new/ecommerce/horizontal/048.jpg"
//             class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
//   <!-- Jumbotron -->
// </section>
// <!-- Section: Design Block -->









// <!-- Section: Design Block -->
// <section class="mb-40">
//   <!-- Navbar -->
//   <nav
//     class="relative flex w-full items-center justify-between bg-white py-2 shadow-sm shadow-neutral-700/10 dark:bg-neutral-800 dark:shadow-black/30  lg:flex-wrap lg:justify-start"
//     data-te-navbar-ref>
//     <!-- Container wrapper -->
//     <div class="flex w-full flex-wrap items-center justify-between px-6">
//       <div class="flex items-center">
//         <!-- Toggle button -->
//         <button
//           class="block border-0 bg-transparent py-2 pr-2.5 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
//           type="button" data-te-collapse-init data-te-target="#navbarSupportedContentY"
//           aria-controls="navbarSupportedContentY" aria-expanded="false" aria-label="Toggle navigation">
//           <span class="[&>svg]:w-7">
//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7">
//               <path fill-rule="evenodd"
//                 d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
//                 clip-rule="evenodd" />
//             </svg>
//           </span>
//         </button>

//         <!-- Navbar Brand -->
//         <a class="text-primary dark:text-primary-400" href="#!">
//           <span class="[&>svg]:ml-2 [&>svg]:mr-3 [&>svg]:h-6 [&>svg]:w-6 [&>svg]:lg:ml-0">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
//               stroke="currentColor">
//               <path stroke-linecap="round" stroke-linejoin="round"
//                 d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
//             </svg>
//           </span>
//         </a>
//       </div>

//       <!-- Collapsible wrapper -->
//       <div class="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
//         id="navbarSupportedContentY" data-te-collapse-item>
//         <!-- Left links -->
//         <ul class="mr-auto lg:flex lg:flex-row" data-te-navbar-nav-ref>
//           <li data-te-nav-item-ref>
//             <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
//               href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light"
//               disabled>Dashboard</a>
//           </li>
//           <li data-te-nav-item-ref>
//             <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
//               href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Team</a>
//           </li>
//           <li class="mb-2 lg:mb-0" data-te-nav-item-ref>
//             <a class="block py-2 pr-2 text-neutral-500 transition duration-150 ease-in-out hover:text-neutral-600 focus:text-neutral-600 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 dark:disabled:text-white/30 lg:px-2 [&.active]:text-black/80 dark:[&.active]:text-white/80"
//               href="#!" data-te-nav-link-ref data-te-ripple-init data-te-ripple-color="light">Projects</a>
//           </li>
//         </ul>
//         <!-- Left links -->
//       </div>
//       <!-- Collapsible wrapper -->

//       <!-- Right elements -->
//       <div class="my-1 flex items-center lg:my-0 lg:ml-auto">
//         <button type="button"
//           class="mr-2 inline-block rounded px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:text-primary-400 dark:hover:bg-neutral-700 dark:hover:bg-opacity-60 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
//           data-te-ripple-init data-te-ripple-color="light">
//           Login
//         </button>
//         <button type="button"
//           class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//           data-te-ripple-init data-te-ripple-color="light">
//           Sign up for free
//         </button>
//       </div>
//       <!-- Right elements -->
//     </div>
//     <!-- Container wrapper -->
//   </nav>
//   <!-- Navbar -->

//   <!-- Jumbotron -->
//   <div class="px-6 py-12 text-center md:px-12 lg:text-left">
//     <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
//       <div class="grid items-center lg:grid-cols-2">
//         <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
//           <div
//             class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
//             <h1 class="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
//               The best offer <br /><span class="text-primary">for your business</span>
//             </h1>
//             <a class="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
//               data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Get started</a>
//             <a class="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700 dark:hover:bg-opacity-40"
//               data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">Learn more</a>
//           </div>
//         </div>
//         <div class="md:mb-12 lg:mb-0">
//           <img src="https://tecdn.b-cdn.net/img/new/ecommerce/vertical/004.jpg"
//             class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
//         </div>
//       </div>
//     </div>
//   </div>
//   <!-- Jumbotron -->
// </section>
// <!-- Section: Design Block -->
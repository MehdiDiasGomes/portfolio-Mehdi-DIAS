<template>
    <nav class="text-white flex justify-between">
        <div>
            <img src="/img/Logo.png" alt="Logo" class="h-8 w-8" />
        </div>
        <div class="flex gap-4 items-center">
            <RouterLink class="hover:text-[#E5484D] duration-200" active-class="font-bold text-[#E5484D]" to="/">Home</RouterLink>
            <RouterLink class="hover:text-[#E5484D] duration-200" active-class="font-bold text-[#E5484D]" to="/tools">Tools</RouterLink>
            <RouterLink class="hover:text-[#E5484D] duration-200" active-class="font-bold text-[#E5484D]" to="/skills">Skills</RouterLink>
            <RouterLink class="hover:text-[#E5484D] duration-200" active-class="font-bold text-[#E5484D]" to="/hire">Hire me</RouterLink>
        </div>
    </nav>
</template>

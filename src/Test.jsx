import React from 'react'

const Test = () => {
    return (
        <div>
            <div tabindex="-1" class="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow">
                        <div class="p-5">
                            <h3 class="text-2xl mb-0.5 font-medium"></h3>
                            <p class="mb-4 text-sm font-normal text-gray-800"></p>
                            <form class="w-full space-y-3">
                                <label for="email" class="sr-only">Email address</label>
                                <input name="email" type="email" autocomplete="email" required="" class="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1" placeholder="Please Enter Your Name" value="" />
                                <button type="submit" class="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Test
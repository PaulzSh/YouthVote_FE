export const metadata = {
    title: 'Checkregisterstatus - Simple',
    description: 'Checkregisterstatus description',
}

import Link from 'next/link'

export default function Page() {
    return (
        <section className="relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">
                    <div className="max-w-5xl mx-auto text-center pb-12 md:pb-16">
                        <h3 className="h3 mb-4">FIND VOTER REGISTRATION STATUS</h3>
                    </div>
                </div>
            </div>

            <div className="max-w-lg mx-auto">
                <form>
                    <div className="flex flex-wrap -mx-3 mb-4">
                        {/*<div className="w-full">*/}
                        {/*    <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Find your Voter Registration Status by Name</label>*/}
                        {/*    /!*<input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />*!/*/}
                        {/*</div>*/}
                    </div>

                    <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="County">Enter PA driver’s license or PennDOT ID card number</label>
                            </div>
                            <input id="IDCard" type="IDCard" className="form-input w-full text-gray-800" placeholder="PA driver’s license or PennDOT ID card number" required />

                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="County">Select a County</label>
                            </div>
                            <input id="County" type="County" className="form-input w-full text-gray-800" placeholder="Select a county" required />

                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="County">Enter Zip Code (Ex. 12345)</label>
                            </div>
                            <input id="ZipCode" type="ZipCode" className="form-input w-full text-gray-800" placeholder="Zip Code" required />

                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="County">Enter First Name (Max. 30 Char. Limit)</label>
                            </div>
                            <input id="FirstName" type="FirstName" className="form-input w-full text-gray-800" placeholder="First Name" required />

                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="County">Enter Last Name (Max. 30 Char. Limit)</label>
                            </div>
                            <input id="LastName" type="LastName" className="form-input w-full text-gray-800" placeholder="Last Name" required />

                            <div className="flex justify-between">
                                <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="County">Enter Date of Birth (mm/dd/yyyy)</label>
                            </div>
                            <input id="DateofBirth" type="DateofBirth" className="form-input w-full text-gray-800" placeholder="Date of Birth" required />
                        </div>
                    </div>

                    <div className="flex flex-wrap -mx-3 mt-6">
                        <div className="width:10% px-3">
                            <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Search</button>
                        </div>
                    </div>
                </form>
            </div>



        </section>
    )
}
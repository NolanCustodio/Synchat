import { isLoggedIn } from "../../stores/userStore";

import "./groups.css";

const SingleGroup = (props: any) => {
    return(
        <div class="x">
            <div class="group-card">
                {/* <!-- Image section --> */}
                <div class="md:w-1/2 relative">
                    <img class="group-card-pic" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.murrayglass.com%2Fwp-content%2Fuploads%2F2020%2F10%2Favatar-768x768.jpeg&f=1&nofb=1&ipt=18d27bf08e4e73ae56008ac620be1bb1e39d4841568cc643af4ddc32d598d197&ipo=images" alt="Card image" class="object-cover w-full h-full"/>
                </div>
                {/* <!-- Content section --> */}
                <div class="md:w-1/2 p-6">
                    <div class="flex items-center justify-between">
                    <h2 class="text-xl font-semibold text-gray-900">Card Title</h2>
                    <span class="text-sm text-gray-600">Category</span>
                    </div>
                    <p class="mt-4 text-gray-700">This is a brief description of the card content. It provides a quick overview of what the card is about.</p>
                    <div class="mt-4">
                    <a href="#" class="text-blue-500 hover:text-blue-700">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Groups(){
    return(
        <div>
            <SingleGroup/>

            <SingleGroup/>
        </div>
    );
};
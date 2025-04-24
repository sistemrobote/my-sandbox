import { useState } from "react";
import { Banner } from "./Banner";

export const BannerContainer = () => {
    const [showBanner, setShowBanner] = useState(false);
    const handleClick = () => setShowBanner((prev) => !prev);
    return (
        <>
            <span>
                <button onClick={handleClick}>Click to open banner</button>
            </span>
            {showBanner && <Banner />}
        </>
    )
}
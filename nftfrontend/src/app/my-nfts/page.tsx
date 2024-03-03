"use client";

import { useContext, useEffect, useState } from "react";
import images from "../../assets";
import { NFTContext } from "../../../context/NftContext";
import { Banner, Loader, NFTCard } from "@/components";
import Image from "next/image";
import { shortenAddress } from "../../../utils/shortenAddress";
import { generateAvatarURL, generateAvatarHTML } from "@cfx-kit/wallet-avatar";

function page() {
    const { fetchMyNftsOrListedNfts, currentAccount } = useContext(NFTContext);
    const [nfts, setNfts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchAndSetNfs = async () => {
            const fetchedNfts = await fetchMyNftsOrListedNfts(
                "fetchItemsPurchased"
            );
            console.log({ fetchedNfts });
            setNfts(fetchedNfts);
            setIsLoading(false);
        };
        fetchAndSetNfs();
    }, []);

    if (isLoading) {
        return (
            <div className="flexStart min-h-screen">
                <Loader />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-start">
            <div className="flexCenter w-full flex-col">
                <Banner
                    name="Your ENMA NFTs"
                    childStyles="text-center mb-4"
                    parentStyles="h-80 justify-center"
                />
                <div className="flexCenter z-0 -mt-20 flex-col">
                    <div className="flexCenter relative size-40 rounded-full bg-nft-black-2 p-1 sm:size-36">
                        <Image
                            src={generateAvatarURL(currentAccount)}
                            className="rounded-full object-cover"
                            layout="fill"
                            objectFit="contain"
                            alt="your image"
                        />
                    </div>
                    <p className="mt-6 font-poppins text-2xl font-semibold text-nft-black-1 dark:text-white">
                        {shortenAddress(currentAccount)}
                    </p>
                </div>
            </div>
            {!isLoading && nfts.length === 0 ? (
                <div className="flexCenter p-16 sm:p-4">
                    <h1 className="font-poppins text-2xl font-extrabold text-nft-black-1 dark:text-white">
                        No NFTs Owned - Purchase NFTs or unlist owned NFTs to
                        view them here
                    </h1>
                </div>
            ) : (
                <div className="flexCenter w-full flex-col p-12 sm:px-4 minmd:w-4/5">
                    <div className="flex w-full flex-1 flex-row px-4 sm:flex-col xs:px-0 minlg:px-8">
                        SearchBar
                    </div>
                    <div className="mt-3 flex w-full flex-wrap">
                        {nfts.map((nft) => (
                            <NFTCard key={nft.tokenId} nft={nft} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default page;

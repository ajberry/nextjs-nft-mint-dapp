export default function Faq() {
  return (
    <>
      <h2 className="text-4xl mb-4">FAQ</h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl mb-2">How much is the minting price?</h3>
          <p>
            The minting price is <b>5 MATIC</b> per NFT.
          </p>
          <h3 className="text-2xl mb-2">Where can I see the collection</h3>
          <p>
              All minted faces will appear on OpenSea.
          </p>
          <h3 className="text-2xl mb-2">Are Faces NFT ERC721 compliant</h3>
          <p>
              Yes. Faces are compliant with the latest OpenZeppelin implementation of ERC721.
          </p>
          <h3 className="text-2xl mb-2">Where are the images stored</h3>
          <p>
              The images are stored on IPFS
          </p>
          <h3 className="text-2xl mb-2">How do I bridge tokens onto the Polygon network</h3>
          <p>
             <a href="https://www.youtube.com/watch?v=Eg1ehrx1ndk" target="_blank">Watch the YouTube video (by RemixMTG)</a>
          </p>
          <h3 className="text-2xl mb-2">Where are the images stroed</h3>
          <p>
              The images are stored on IPFS
          </p>
        </div>
      </div>
    </>
  );
}

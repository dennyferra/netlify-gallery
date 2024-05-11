import Image from 'next/image';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { ImageWithSizeOverlay } from './image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';
import { useMemo } from 'react';
import { ImageSelector } from './components/imageSelector';

export const metadata = {
    title: 'Netlify Submission'
};

const sampleImage = '/images/corgi.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';

const nextImageSnippet = `
When running on Netlify, \`next/image\` is automatically set-up to use Netlify Image CDN for optimized images.

~~~jsx
import Image from 'next/image';

// In your component
<Image src="/images/corgi.jpg" alt="Corgi" /* ... additional props */ />
~~~
`;

const originalVsCdnSnippet = `
In the code below, a regular \`<img>\` tag is used in both cases for a framework-agnostic example. 
Other than using \`next/image\` or rolling your own \`<img>\` tags, you can also use the excellent [unpic-img](https://unpic.pics/).

~~~jsx
// <== On the left, the original image
<img src="/images/corgi.jpg" alt="Corgi" />

// ==> On the right, explicitly using Netlify Image CDN endpoint for a responsive image
<img 
  srcSet="/.netlify/images?url=images/corgi.jpg&w=640 640w, /.netlify/images?url=images/corgi.jpg&w=1280 1280w, /.netlify/images?url=images/corgi.jpg&w=2048 2048w"
  sizes="(max-width: 1024px) 100vw, 1024px" 
  alt="Corgi" 
/>
~~~
`;

const devModeWarning = `
In local development, optimization is performed locally without automatic format
detection, so format is set to WebP.
`;

export default function Page() {
    return (
        <div className="flex flex-col gap-6 sm:gap-12">
            <section className="flex flex-col items-start gap-6 sm:gap-8">
                <ContextAlert
                    addedChecksFunction={(ctx) => {
                        return ctx === 'dev' ? devModeWarning : null;
                    }}
                />
                <h1 className="mb-0" title="Collagery: Collage Gallery">
                    Collagery
                    <span className="block text-sm font-normal tracking-wide">(collage gallery)</span>
                </h1>
            </section>
            <ImageSelector />
            <section className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold sm:text-2xl">Your Collagery</h2>
                <div className="h-[400px] w-full max-w-full bg-slate-900 rounded-xl grid grid-cols-2 gap-1 p-2">
                    <div className="bg-slate-700">a</div>
                    <div className="flex flex-col gap-1">
                        <div className="bg-slate-800 h-1/2">b</div>
                        <div className="bg-slate-800 h-1/2">b2</div>
                    </div>
                    <div className="col-span-2 bg-slate-800">c</div>
                    <div>d</div>
                </div>
            </section>
            <section>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">Using next/image component</h2>
                <Markdown content={nextImageSnippet} />
                <div
                    className="mt-8 overflow-hidden border-2 border-white rounded-lg relative max-w-screen-lg"
                    style={{ aspectRatio: '3/2' }}
                >
                    {/* 
                    1-4: https://unsplash.com/@timorse
                    Photo by <a href="https://unsplash.com/@timorse?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Thomas Morse</a> on <a href="https://unsplash.com/photos/OnN8rul32fk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    5-10: https://unsplash.com/@john_artifexfilm10" 
                    Photo by <a href="https://unsplash.com/@john_artifexfilm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">John Lee</a> on <a href="https://unsplash.com/photos/people-on-seashore-near-house-4TXgmQSkv8Q?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                    11-16: https://unsplash.com/@cbarbalis
                    Photo by <a href="https://unsplash.com/@cbarbalis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Chris Barbalis</a> on <a href="https://unsplash.com/photos/a-foggy-landscape-with-trees-and-hills-in-the-distance-4FFD0GL-HEs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
                    */}
                    <Image
                        src="/images/corgi.jpg"
                        priority
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        alt="Corgi"
                    />
                </div>
                <span className="text-sm italic">
                    Credit: photo by{' '}
                    <a href="https://unsplash.com/@alvannee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Alvan Nee
                    </a>{' '}
                    on{' '}
                    <a href="https://unsplash.com/photos/long-coated-white-and-brown-dog-lvFlpqEvuRM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Unsplash
                    </a>
                </span>
            </section>

            <section>
                <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
                    Original vs. optimized image: can you tell the difference?
                </h2>
                <Markdown content={originalVsCdnSnippet} />
                <div className="diff aspect-[3/2] rounded-lg border-2 border-white mt-8">
                    <div className="diff-item-1">
                        <div>
                            {/* <ImageWithSizeOverlay
                                srcSet={sampleImageSrcSet}
                                sizes={sampleImageSrcSet}
                                overlayPosition="right"
                            /> */}
                        </div>
                    </div>
                    <div className="diff-item-2">
                        <div>{/* <ImageWithSizeOverlay src="/images/corgi.jpg" /> */}</div>
                    </div>
                    <div className="diff-resizer"></div>
                </div>
            </section>
        </div>
    );
}

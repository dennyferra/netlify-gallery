import { ContextAlert } from 'components/context-alert';
import { Markdown } from 'components/markdown';
import Image from 'next/image';
import { getNetlifyContext } from 'utils';
import { CollageGallery } from './components/collageGallery';

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
            <CollageGallery />
        </div>
    );
}

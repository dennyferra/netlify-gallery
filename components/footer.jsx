export function Footer() {
    return (
        <footer className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex flex-row gap-8 justify-evenly bg-blue-950 rounded-xl p-4">
                <p>
                    Photos by{' '}
                    <a href="https://unsplash.com/@timorse?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Thomas Morse
                    </a>
                </p>
                <p>
                    Photos by{' '}
                    <a href="https://unsplash.com/@john_artifexfilm?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        John Lee
                    </a>
                </p>
                <p>
                    Photos by{' '}
                    <a href="https://unsplash.com/@cbarbalis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                        Chris Barbalis
                    </a>
                </p>
            </div>
            <div className="text-sm text-center mt-4">
                Netlify Submission by dennyferra
                <br />
                Based on{' '}
                <a href="https://nextjs-platform-starter.netlify.app/" target="_blank">
                    https://nextjs-platform-starter.netlify.app/
                </a>
            </div>
        </footer>
    );
}

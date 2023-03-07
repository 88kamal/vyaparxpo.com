import React from 'react'

function Product() {
    return (
        <div>
            <section className="bg-white container px-4 mx-auto mb-10 md:mb-20">
                <h1 className=' container mx-auto  font-bold text-2xl md:text-3xl fonts2 mb-5'>VYAPAR... <span className=' text-rose-600  '>INDIA 2023</span></h1>
                <section className="text-gray-600 body-font">
                    <div className=" md:flex md:gap-3 md:justify-between md:items-center">
                        <div className="left mb-5 md:m-0">
                            <div className="lg:max-w-[100%] lg:w-full md:w-1/2 w-full">
                                <video className="min-w-full min-h-full rounded-xl  object-cover" src="https://firebasestorage.googleapis.com/v0/b/videos-5c17d.appspot.com/o/agriculture%20profile%20video.mp4?alt=media&token=163ddf43-160f-48e4-9002-10ae2ca65322" type="video/mp4" autoPlay muted loop />
                            </div>
                        </div>
                        <div className="mid mb-5 md:m-0">
                            <h1 className=' container  mx-auto font-bold text-2xl md:text-3xl fonts2 mb-2'>Content</h1>
                            <p className=' text-justify fonts4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, accusamus impedit aliquid, mollitia temporibus, ab quasi unde earum tempora molestiae eos. Enim, minima voluptas inventore vitae veritatis repudiandae eum consequatur. Commodi ex libero vel nisi, voluptatum maiores, delectus veritatis excepturi impedit molestias tenetur accusamus. In!</p>
                        </div>
                        <div className="right mb-5 md:m-0">
                            <div className="lg:max-w-[100%] lg:w-full md:w-1/2 w-full">
                            <video className="min-w-full min-h-full rounded-xl  object-cover" src="https://firebasestorage.googleapis.com/v0/b/videos-5c17d.appspot.com/o/agriculture%20profile%20video.mp4?alt=media&token=163ddf43-160f-48e4-9002-10ae2ca65322" type="video/mp4" autoPlay muted loop />
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}

export default Product
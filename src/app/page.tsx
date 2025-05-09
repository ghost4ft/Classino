import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-hero-pattern bg-no-repeat bg-center xl:bg-left mt-5 xl:mt-20">
        <div className="container flex flex-col-reverse items-center xl:flex-row">
          <div className="flex-1 flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
            <h3 className="text-xl xl:text-2xl dark:text-info">
              خوش اومدی به کلاسینو
            </h3>
            <h1 className=" text-3xl lg:text-5xl xl:text-5xl font-black gradient">
              مسیر صعود به قله‌های پیشرفت
            </h1>
            <p className="max-w-2xl  text-lg md:text-xl font-bold leading-8">
              با سامانه آموزش آنلاین، آموزش خود را به صورت آنلاین و به سهولت
              تماشا کنید
            </p>
            <Image
              src="/images/frameworks.png"
              className="grayscale mt-4 opacity-70 m-auto xl:m-0"
              width={412}
              height={39}
              alt=""
            />
          </div>
          <Image
            src="/images/programmer-landing.svg"
            alt=""
            width={702}
            height={521}
          />
        </div>
      </section>
    </>
  );
}

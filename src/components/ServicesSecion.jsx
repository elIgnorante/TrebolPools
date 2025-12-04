import { HammerIcon, WavesIcon, BrickWallIcon, WavesLadderIcon } from "lucide-react"

const services = [
    {
        title: "Remodels",
        description:
            "We offer complete remodeling services for your pool, including resurfacing, tile replacement, and deck renovation to give your pool a fresh new look.",
        icon: <HammerIcon className="h-6 w-6" />,
        variant: "default",
    },
    {
        title: "Waterfall and Pool Patios",
        description:
            "Enhance the beauty of your pool area with our custom waterfall installations and stylish pool patios, designed to create a relaxing oasis in your backyard.",
        icon: <WavesIcon className="h-6 w-6" />,
        variant: "default",
    },
    {
        title: "Pool Finishing",
        description:
            "Choose from a variety of pool finishing options, including plaster, pebble, and tile finishes, to enhance the durability and aesthetics of your pool.",
        icon: <WavesLadderIcon className="h-6 w-6" />,
        variant: "default",
    },
    {
        title: "Residential and Commercial Swimming Pools",
        description:
            "We specialize in designing and constructing both residential and commercial swimming pools, tailored to meet your specific needs and preferences.",
        icon: (
            <img
                alt="TrebolLogo"
                src="@/../public/trebol_logo.png"
                className="h-8 w-auto"
            />
        ),
        variant: "brand",
    },
    {
        title: "Tile and Coping",
        description:
            "We provide expert tile and coping installation services to give your pool a polished and elegant look, while also ensuring long-lasting durability.",
        icon: <BrickWallIcon className="h-6 w-6" />,
        variant: "default",
    },
]

export const ServicesSecion = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#f6f9ff] via-[#f6f9ff] to-[#eef3ff] py-16 sm:py-20">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -left-12 top-10 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl sm:h-64 sm:w-64" />
                <div className="absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-indigo-200/50 blur-3xl sm:h-72 sm:w-72" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1.6fr,1fr] lg:items-start">
                    <div className="space-y-10">
                        <div>
                            <p className="text-lg font-semibold text-slate-900 sm:text-xl">What We do</p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {services.map(({ title, description, icon, variant }) => (
                                <div
                                    key={title}
                                    className={`flex h-full flex-col rounded-2xl border shadow-[0_12px_30px_rgba(46,87,157,0.07)] ${
                                        variant === "brand"
                                            ? "border-transparent bg-emerald-600 text-white"
                                            : "border-slate-100 bg-white"
                                    } p-5`}
                                >
                                    <div
                                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                                            variant === "brand"
                                                ? "bg-white/20"
                                                : "bg-slate-100 text-sky-600"
                                        }`}
                                    >
                                        {icon}
                                    </div>
                                    <h4
                                        className={`text-lg font-semibold ${
                                            variant === "brand" ? "text-white" : "text-slate-900"
                                        }`}
                                    >
                                        {title}
                                    </h4>
                                    <p
                                        className={`mt-2 text-sm leading-6 ${
                                            variant === "brand"
                                                ? "text-white/80"
                                                : "text-slate-600"
                                        }`}
                                    >
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-[0_16px_40px_rgba(46,87,157,0.12)]">
                            <img
                                alt="Pool services"
                                src="@/../public/PoolServicesSection.jpg"
                                className="h-full w-full max-w-sm object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

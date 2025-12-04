import { HammerIcon, WavesIcon, BrickWallIcon, WavesLadderIcon } from "lucide-react"

export const ServicesSecion = () => {
    return (
        <section>
            <div>What We do</div>
            <section>
                <section>
                    <div>
                        <div><HammerIcon /></div>
                        <h4>Remodels</h4>
                        <p>We offer complete remodeling services for your pool, including resurfacing, tile replacement, and deck renovation to give your pool a fresh new look.</p>
                    </div>
                    <div>
                        <div><WavesIcon /></div>
                        <h4>Waterfall and Poll Patios</h4>
                        <p>Enhance the beauty of your pool area with our custom waterfall installations and stylish pool patios, designed to create a relaxing oasis in your backyard.</p>
                    </div>
                    <div>
                        <div>
                            <img
                                alt="TrebolLogo"
                                src="@/../public/trebol_logo.png"
                                className="h-8 w-auto"
                            />
                        </div>
                        <h4>Residential and Commercial Swimming Pools</h4>
                        <p>We specialize in designing and constructing both residential and commercial swimming pools, tailored to meet your specific needs and preferences.</p>
                    </div>
                </section>
                <section>
                    <section>
                        <div>
                            <div><WavesLadderIcon /></div>
                            <h4>Pool Finishing</h4>
                            <p>Choose from a variety of pool finishing options, including plaster, pebble, and tile finishes, to enhance the durability and aesthetics of your pool.</p>
                        </div>
                        <div>
                            <div><BrickWallIcon /></div>
                            <h4>Tile and Coping</h4>
                            <p>We provide expert tile and coping installation services to give your pool a polished and elegant look, while also ensuring long-lasting durability.</p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img
                                alt="PoolServicesSection"
                                src="@/../public/PoolServicesSection.jpg"
                                className="h-8 w-auto"
                            />
                        </div>
                    </section>
                </section>
            </section>
        </section>
    )
}

import { HousePlus, Bolt, ContactRound, CircleUserRound } from "lucide-react";


export const NavItems = [
    {
        label: "Home",
        link: "/",
        icon: HousePlus,
    },
    {
        label: "About",
        link: "/about",
        icon: ContactRound,
    },
    {
        label: "Services",
        link: "/services",
        children: [

            {
                label: "Electrical Safety Certificates",
                link: "/services/ElectricalSafetyCertificates",
                icon: Bolt,

            },

            {
                label: "Outdoor Lighting and Heating",
                link: "/services/OutdoorLightingAndHeating",
                icon: Bolt,
            },

            {
                label: "Electric Vehicle Charging Installation",
                link: "/services/ElectricVehicleChargingInstallation",
                icon: Bolt,

            },
            {
                label: "Air Conditioning Installation & Services",
                link: "/services/AirConServices",
                Bolt,
            },
            {
                label: "Flood damage",
                link: "/services/FloodDamage",
                Bolt,
            },
            {
                label: "PAT TESTING",
                link: "/services/PatTest",
                Bolt,
            },

        ]
    },
    {
        label: "Contact us",
        icon: CircleUserRound,
        link: "/contact",
    }


];


export const servicePageItems = [

    {
        id: 1,
        title: 'Electrical Safety Certificates',
        url: '/services/ElectricalSafetyCertificates',
        image: '/elec-safety.jpg'
    },
    {
        id: 2,
        title: 'Outdoor Lighting and Heating',
        url: '/services/OutdoorLightingAndHeating',
        image: '/outdoor-light.jpg'
    },
    {
        id: 3,
        title: 'PAT Testing',
        url: '/services/patTest',
        image: '/pat-test.jpg'
    },
    {
        id: 4,
        title: 'Electric Vehicle Charging Installation',
        url: '/services/ElectricVehicleChargingInstallation',
        image: '/fuse-box1.jpg'
    },
    {
        id: 5,
        title: 'AirConServices',
        url: '/services/AirConServices',
        image: '/fuse-box1.jpg'
    },
    {
        id: 6,
        title: 'Flood Damage',
        url: '/services/FloodDamage', image: '/hero-electric.jpg'
    }
]





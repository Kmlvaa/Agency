import React from 'react'
import Frame from '../../../assets/Frame 168.png'
import Image from 'next/image'
import Partners from '../../_Components/Partners/page'
import Statistics from '../../_Components/Statistics/page'
import teamImage from '../../../assets/team.png'

export default function () {
    return (
        <div className='max-md:bg-background'>
            <Image src={Frame} alt='frame' className='absolute -top-32 -left-24 max-sm:-left-[50px] z-10 -rotate-12' />
            <div className='flex flex-col items-center gap-14'>
                <h1 className='font-bold text-5xl mt-10 max-sm:text-3xl'>Komandamızla tanış olun</h1>
                <div className='flex flex-wrap items-center justify-center gap-10'>
                    {members?.map((member) => {
                        return (
                            <div className='flex flex-col items-center gap-3' key={member.id}>
                                <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full' />
                                <div className='flex flex-col items-center'>
                                    <p className='font-bold text-xl leading-3'>{member.name}</p>
                                    <p>{member.profession}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Statistics />
            <Partners />
        </div>
    )
}

const members = [
    {
        id: 1,
        name: "Ali ALiyev",
        profession: "Dizayner"
    },
    {
        id: 2,
        name: "Ruslan Rzayev",
        profession: "C# developer"
    },
    {
        id: 3,
        name: "Niyazi Babayev",
        profession: "Front-End developer"
    },
    {
        id: 4,
        name: "Ali ALiyev",
        profession: "Dizayner"
    },
    {
        id: 5,
        name: "Ali ALiyev",
        profession: "Dizayner"
    },
    {
        id: 6,
        name: "Ali ALiyev",
        profession: "Dizayner"
    },
    {
        id: 7,
        name: "Ali ALiyev",
        profession: "Dizayner"
    },
]
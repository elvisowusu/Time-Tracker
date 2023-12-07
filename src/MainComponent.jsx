import React from 'react';
import ellipsis from './assets/icon-ellipsis.svg';
import exercise from './assets/icon-exercise.svg';
import play from './assets/icon-play.svg';
import selfCare from './assets/icon-self-care.svg';
import social from './assets/icon-social.svg';
import study from './assets/icon-study.svg';
import work from './assets/icon-work.svg';
import Jeremy from './assets/image-jeremy.png';

function MainComponent() {

    const icons =[
                    {id:1,icon:work,category:'Work',time:'32hrs',color:'Lightredwork',ellipsis:ellipsis},
                    {id:2,icon:play,category:'Play',time:'10hrs',color:'Softblueplay',ellipsis:ellipsis},
                    {id:3,icon:study,category:'Study',time:'4hrs',color:'Lightredstudy',ellipsis:ellipsis},
                    {id:4,icon:exercise,category:'Exercise',time:'4hrs',color:'Limegreenexercise',ellipsis:ellipsis},
                    {id:6,icon:social,category:'Social',time:'2hrs',color:'Violetsocial',ellipsis:ellipsis},
                    {id:5,icon:selfCare,category:'Self Care',time:'2hrs',color:'Softorangeselfcare',ellipsis:ellipsis}
                ]
    const JeremyProfile =['Daily','Weekly','Monthly']




    return (
        <div className='flex flex-col items-center bg-Verydarkblue px-[1.5rem] py-[6rem]'>
           <div className='bg-Darkblue w-full rounded-2xl'>
                <div className='flex items-center gap-[0.9rem] bg-BlueColor rounded-2xl px-[1.8rem] py-[2rem]'>
                    <img className='w-[4.6rem] border-2 rounded-full' src={Jeremy} alt="image" />
                    <p ><span className='block text-Desaturatedblue font-medium'>Report for </span><span className='text-PaleBlue text-[1.5rem] lg:text-[2rem]'>Jeremy Robsom</span></p>
                </div>
                <p className='flex lg:flex-col items-center justify-between px-[1.8rem] py-[1.3rem]'>
                    {
                        JeremyProfile.map((Jeremy)=>{
                            return <span className='allText'>{Jeremy}</span>
                        })
                    }
                </p>
           </div>



           <div className='w-full lg:grid-cols-3'>
            <div className='rounded-2xl relative overflow-hidden h-[11.3rem]'>
                    <div className='flex justify-end item px-[1rem] bg-Lightredwork h-[3.7rem] absolute w-full'><img className={`w-[4.8rem] absolute -top-[0.6rem]`} src={work} alt="" /></div>
                    <div className='bg-Darkblue rounded-2xl w-full absolute top-[2.5rem] px-[1.8rem] py-[1.8rem]'>
                        <div className='mb-2 flex items-center justify-between '><p className='text-PaleBlue font-semibold text-[1.2rem]'>Work</p><img src={ellipsis} alt="image" /></div>
                        <div className='flex lg:flex-col items-center justify-between'><p className='text-PaleBlue text-[2rem]'>32hrs</p><p className='text-Desaturatedblue font-medium'>Last week - 36hrs</p></div>
                    </div>
            </div>
           </div>
        </div>
    );
}

export default MainComponent;
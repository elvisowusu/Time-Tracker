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
                    {id:1,icon:work,category:'Work',time:'32hrs',color:'bg-Lightredwork',lastWeek:'36'},
                    {id:2,icon:play,category:'Play',time:'10hrs',color:'bg-Softblueplay',lastWeek:'8'},
                    {id:3,icon:study,category:'Study',time:'4hrs',color:'bg-Lightredstudy',lastWeek:'7'},
                    {id:4,icon:exercise,category:'Exercise',time:'4hrs',color:'bg-Limegreenexercise',lastWeek:'5'},
                    {id:6,icon:social,category:'Social',time:'5hrs',color:'bg-Violetsocial',lastWeek:'10'},
                    {id:5,icon:selfCare,category:'Self Care',time:'2hrs',color:'bg-Softorangeselfcare',lastWeek:'2'}
                ]
    const JeremyProfile =['Daily','Weekly','Monthly']




    return (
        <div className='flex flex-col xl:flex-row xl:gap-[1.4rem] items-center justify-center bg-Verydarkblue px-[1.5rem] py-[6rem]'>
           <div className='bg-Darkblue w-[21.4rem] xl:w-[17rem] rounded-2xl'>
                <div className='flex items-center gap-[0.9rem] xl:gap-[2rem] bg-BlueColor rounded-2xl px-[1.8rem] py-[2rem] xl:flex-col xl:items-start xl:h-[20rem]'>
                    <img className='w-[4.6rem] xl:w-[5rem] border-2 rounded-full' src={Jeremy} alt="image" />
                    <p ><span className='block text-Desaturatedblue font-medium'>Report for </span><span className='text-PaleBlue text-[1.5rem] xl:text-[2.5rem] xl:leading-[3rem]'>Jeremy Robsom</span></p>
                </div>
                <p className='jerremyParagraph'>
                    {
                        JeremyProfile.map((Jeremy)=>{
                            return <span className='allText'>{Jeremy}</span>
                        })
                    }
                </p>
           </div>



           <div className='flex flex-col xl:grid xl:grid-cols-3 gap-[1.3rem] mt-[1.3rem]'>
            {
                icons.map((iconItems)=>{
                    return <div className='rounded-2xl relative overflow-hidden h-[11.3rem] w-[21.4rem]'>
                                <div className={`flex justify-end item px-[1rem] ${iconItems.color} h-[3.7rem] absolute w-full`}><img className={`w-[4.8rem] absolute -top-[0.6rem]`} src={iconItems.icon} alt="" /></div>
                                <div className='bg-Darkblue rounded-2xl w-full absolute top-[2.5rem] px-[1.8rem] py-[1.8rem]'>
                                    <div className='mb-2 flex items-center justify-between '><p className='text-PaleBlue font-semibold text-[1.2rem]'>{iconItems.category}</p><img src={ellipsis} alt="image" /></div>
                                    <div className='flex lg:flex-col items-center justify-between'><p className='text-PaleBlue text-[2rem]'>{iconItems.time}</p><p className='text-Desaturatedblue font-medium'>Last week - {iconItems.lastWeek}rs</p></div>
                                </div>
                            </div>
                })
            }
           </div>
        </div>
    );
}

export default MainComponent;
import './App.css';
import Classroom from './components/Classroom.svg'; //Pictures--------
import CCA from './components/CCA.svg';
import ME from './components/Me.svg';
import S5 from './components/4A2.svg';
import SPLS from './components/SPLS.svg';
import GC from './components/GC.svg';
import skill from './components/skill.svg';
import work from './components/work.svg';
import NS from './components/NS.svg';
import Header from './components/Header';           //Components----------
import Header2 from './components/Header2';
import Section from './components/Section';
import Divider from './components/Divider';
import TopSection from './components/TopSection';
import NewSection from './components/NewSection';
import ListOfText from './components/ListOfText';

//import Button from './components/Button';

function App() {
  //Declare a state variable



  return (
    <div className="App" style={{backgroundColor:"#44AABB"}}>
      <Header title={"Tan Pang Boon"}></Header>

      <TopSection 
      Image={NS}
      text = {<ListOfText list1={"Hello, my name is Pang Boon from the Air Force Engineer. My hobbies are playing basketball, swimming and other related sports. Below is my resume, which include my educations, CCA, Work experiences and tehcnical skills."} > </ListOfText>}
      ></TopSection>

      <Header2></Header2>  

      <Divider title={"Education"} image={Classroom} ID={"education"} ></Divider>

      <NewSection 
        backgroundColor={"#F7B733"} 
        color={"black"} 
        title={"Diploma in Aeronautical Engineering in Singapore Polytechnic"} 
        date={"Apr 2018 – Apr 2021"} 
        sideNote={"GPA: 3.881" }
        paragraph={"Edusave Skill Award (2021)"}
        paragraph2={"Tecmaven Merit Award (2021)"}
        paragraph3={"MAE Final Year Project Exhibition Bronze Medal (2021)"}
        Image ={ME}
        newText= 
          {<ListOfText 
              list1={"MAE Director’s Honour Roll (2019/20 & 2020/2021)"} 
              list2={"MAE Book Prize for Advance Mathematics II (2019/20)"} 
              list3={"MAE Book Prize for Engineering Mathematics I (2018/19)"} 
              list4={"Edusave Merit Bursary (2019-2021)"} 
              list5={"Edusave Certificate of Academic Achievement (2019-2020)"}
          > </ListOfText>}
      ></NewSection>

      <NewSection 
        backgroundColor={"#F7B733"}
        color={"black"} 
        title={"Juying Secondary School"} 
        date={"Jan 2013 – Dec 2017"} 
        sideNote={"GCE O level L1R4 :   13 points" }
        Image ={S5}
          paragraph ={"GCE O level (2017)"}
          paragraph2={"GCE N Level (2016)"}
          paragraph3={"Class Vice-Chairperson (2017)"}
        newText= {<ListOfText 
            list1={"Edusave Character Award (2017)"} 
            list2={"Edusave Award for Achievement, Good Leadership and Services (EAGLES) (2017)"} 
            list3={"Class Information and Communications Technology Leader (2016)"} 
            list4={"Edusave scholarship (2015 - 2017)"} 
            list5={"Top in Additional Mathematics (2015)"}
        > </ListOfText>}
      ></NewSection>


      <Divider title={"CCAs"} image={CCA} ID={"cca"}></Divider>

      <NewSection 
        backgroundColor={"#F7B733"} 
        color={"black"} 
        title={"Singapore Polytectnic Lifesavers"} 
        date={""} 
        sideNote={"CCA grade:   Gold with Honour" }
        paragraph={"Vice-Captain of SP Lifesavers (2020)"}
        paragraph2={"Singapore Life Saving Society (SLSS) Lifesaving 1,2,3 Award (2019)"}
        paragraph3={"SLSS Cardio Pulmonary Resuscitation Award (2019)"}
        Image ={SPLS}
        newText= 
        {<ListOfText 
            list1={"Standard First Aid and CPR + AED (2019)"} 
            list2={"SLSS Bronze Medallion Award and Bronze Cross Award (2019)"} 
            list3={"Class Information and Communications Technology Leader (2016)"} 
            list4={"SLSS National competitions (2019)"} 
            list5={"NUS Lifesaving Invis competitions (2019)"}
        > </ListOfText>}
      ></NewSection>
      

      
<NewSection 
        backgroundColor={"#F7B733"} 
        color={"black"} 
        title={"Green Club (Secondary School)"} 
        date={""} 
        sideNote={"CCA grade:   A1" }
        paragraph={"Represented School At Green Club Earth Hour (2016 & 2017) "}
        paragraph2={"Represented School At International Water Festival Solar Boat (2014)"}
        paragraph3={"Silver Award at the Community in Bloom Award (2016)"}
        Image ={GC}
        newText= 
        {<ListOfText 
            list1={"Silver Award at the Community in Bloom Award (2014)"} 
        > </ListOfText>}
      ></NewSection>

      <Divider title={"WorkExperiences"} image={work} ID={"work"}></Divider>

      <Section
        backgroundColor={"#F7B733"} 
        color={"black"} 
        title={"Part Time:"} 
        date={""} 
        sideNote={""}
        paragraph={"Lifeguard"}
        paragraph2={"Swim Coaching"}
        paragraph3={"Electronic Warehouse/Office helper"}
        Image ={""}
      ></Section>

      <Divider title={"Skills"} image={skill} ID={"skill"}></Divider>

      <Section 
        backgroundColor={"#F7B733"} 
        color={"black"} 
        title={"Technical Skills:"} 
        date={""} 
        sideNote={""}
        paragraph={"Computer programming (Basic Visual C++ & C#)"}
        paragraph2={"Statistical analysis software (Minitab express and KNIME)"}
        paragraph3={"Computer-aided design (AutoCAD, Catia and Inventor)"}
        Image ={""}
      ></Section>

      <br/><br/><br/><br/><br/><br/>

      <Header title={"Follow my Socials:"}></Header>


    </div>
  );
}

export default App;

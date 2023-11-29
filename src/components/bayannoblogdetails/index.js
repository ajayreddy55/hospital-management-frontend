import { useParams } from "react-router-dom";
import "./index.css";
import Footer from "../footer";
import Navbar from "../navbar";

const blogsList = [
  {
    id: 1,
    author: " Mr. Admin",
    title: "Why employer healthcare strategies must be local one",
    description:
      "The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs people in various markets, you may be familiar with a common conundrum: health care is fundamentally local.",
    date: "20 Oct, 2017",
    secondDescription:
      "The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs people in various markets, you may be familiar with a common conundrum: health care is fundamentally local. And as a result, your employees may experience benefit disparity, an issue that’s undoubtedly caused you some concern. Feeling unease is understandable, but the truth is, benefit disparity doesn’t have to be a drawback or a roadblock. Think for a moment about the other benefits you offer your employees: everything from on-site perks to commuter compensation. There’s no way you can create parity across markets for those types of benefits; so why should anxiety escalate when health care is concerned?",
    questionsList: [
      {
        question: "How local solutions solve benefit disparity",
        answer:
          "The current one-size-fits-all national strategy for health care isn’t working — we all know this. For many employers in this current climate, the typical action is to select a national insurance provider and hope that performance and delivery of care is equal in all markets. But within the current system, this isn’t possible or true; quality and cost can (and do) fluctuate from city to city and state to state. Rather than simply hoping for equity within an unequal system, start by recognizing there is always going to be some unevenness on this playing field and start searching for ways to make each market strong, stable, and self-sufficient. Offer your employees the best care that’s available in each local market. By envisioning equity through local solutions, you can start moving forward toward tangible care, quality, and value.",
      },
      {
        question: "Real examples of reimagining care",
        answer:
          "So how can you feasibly do this? One place to start is by looking to others who have started paving their own path. Take Disney for example. At the 22nd Annual Leadership Summit in San Diego, Walt Disney’s senior executive of employee health benefits, Barbara Wachsman, spoke out about the urgent need of better healthcare delivery in corporate America. And they aren’t just talking about it — Disney is restructuring its benefits programs, contracting directly with trusted, local healthcare providers to expand narrow networks and provide the best quality care. Wachsman and others in her position are demanding better value from the providers in their health plan networks to better serve their scores of employees. Walmart is yet another example of a company challenging the status quo, moving to a centers of excellence program that sends employees to the Cleveland Clinic for specific procedures, ensuring an affordable price for the company and high-quality care for employees.",
      },
      {
        question: "Research reveals innovative strategies",
        answer:
          "By searching for solutions outside the box, employers can successfully navigate a healthcare system that traditionally hasn’t suited their needs or the needs of their diverse employee populations. Onsite health centers are one option, but near-site primary care programs with integrated virtual care can be a strategic, affordable alternative solution. According to the National Business Group on Health (NBGH) 2018 Large Employers’ Health Care Strategy and Plan Design Survey, 54 percent of large employers will have on-site (or near-site) health centers in 2018 and another 11 percent are considering this by 2020. Additionally, about 25 percent of employers have on-site centers in one location only, while 22 percent of employers have on-site centers in at least 6 locations. The takeaway is that it is entirely possible to provide employees with quality, affordable care, regardless of your geographic location; the key is to shift your perspective on the current model and seek solutions that make sense for your company and your workers.",
      },
      {
        question: "Bringing care to employees nationwide",
        answer:
          "Because One Medical has worked with an array of large corporations, we understand the concerns employers have around benefit disparity. Many of our clients have office locations in cities we haven’t arrived in yet. But because we’re already in major hubs — Boston, Chicago, Los Angeles, New York, Phoenix, the San Francisco Bay Area, Seattle, and Washington, D.C. — we have plenty of overlap with a large proportion of their employees from coast to coast. And for those employees who frequently travel among major metros, they can greatly benefit from our 24/7 virtual care and the opportunity to pop into any of our offices throughout the country. By doing your due diligence, you can find the right solution for each regional population and provide your employees with the very best healthcare, that will deliver the highest value, regardless of geography.",
      },
    ],
  },
  {
    id: 2,
    author: " Mr. Admin",
    title: "Why employer healthcare strategies must be local two",
    description:
      "The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs people in various markets, you may be familiar with a common conundrum: health care is fundamentally local.",
    date: "12 sep, 2018",
    secondDescription:
      "The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs people in various markets, you may be familiar with a common conundrum: health care is fundamentally local. And as a result, your employees may experience benefit disparity, an issue that’s undoubtedly caused you some concern. Feeling unease is understandable, but the truth is, benefit disparity doesn’t have to be a drawback or a roadblock. Think for a moment about the other benefits you offer your employees: everything from on-site perks to commuter compensation. There’s no way you can create parity across markets for those types of benefits; so why should anxiety escalate when health care is concerned?",
    questionsList: [
      {
        question: "How local solutions solve benefit disparity",
        answer:
          "The current one-size-fits-all national strategy for health care isn’t working — we all know this. For many employers in this current climate, the typical action is to select a national insurance provider and hope that performance and delivery of care is equal in all markets. But within the current system, this isn’t possible or true; quality and cost can (and do) fluctuate from city to city and state to state. Rather than simply hoping for equity within an unequal system, start by recognizing there is always going to be some unevenness on this playing field and start searching for ways to make each market strong, stable, and self-sufficient. Offer your employees the best care that’s available in each local market. By envisioning equity through local solutions, you can start moving forward toward tangible care, quality, and value.",
      },
      {
        question: "Real examples of reimagining care",
        answer:
          "So how can you feasibly do this? One place to start is by looking to others who have started paving their own path. Take Disney for example. At the 22nd Annual Leadership Summit in San Diego, Walt Disney’s senior executive of employee health benefits, Barbara Wachsman, spoke out about the urgent need of better healthcare delivery in corporate America. And they aren’t just talking about it — Disney is restructuring its benefits programs, contracting directly with trusted, local healthcare providers to expand narrow networks and provide the best quality care. Wachsman and others in her position are demanding better value from the providers in their health plan networks to better serve their scores of employees. Walmart is yet another example of a company challenging the status quo, moving to a centers of excellence program that sends employees to the Cleveland Clinic for specific procedures, ensuring an affordable price for the company and high-quality care for employees.",
      },
      {
        question: "Research reveals innovative strategies",
        answer:
          "By searching for solutions outside the box, employers can successfully navigate a healthcare system that traditionally hasn’t suited their needs or the needs of their diverse employee populations. Onsite health centers are one option, but near-site primary care programs with integrated virtual care can be a strategic, affordable alternative solution. According to the National Business Group on Health (NBGH) 2018 Large Employers’ Health Care Strategy and Plan Design Survey, 54 percent of large employers will have on-site (or near-site) health centers in 2018 and another 11 percent are considering this by 2020. Additionally, about 25 percent of employers have on-site centers in one location only, while 22 percent of employers have on-site centers in at least 6 locations. The takeaway is that it is entirely possible to provide employees with quality, affordable care, regardless of your geographic location; the key is to shift your perspective on the current model and seek solutions that make sense for your company and your workers.",
      },
      {
        question: "Bringing care to employees nationwide",
        answer:
          "Because One Medical has worked with an array of large corporations, we understand the concerns employers have around benefit disparity. Many of our clients have office locations in cities we haven’t arrived in yet. But because we’re already in major hubs — Boston, Chicago, Los Angeles, New York, Phoenix, the San Francisco Bay Area, Seattle, and Washington, D.C. — we have plenty of overlap with a large proportion of their employees from coast to coast. And for those employees who frequently travel among major metros, they can greatly benefit from our 24/7 virtual care and the opportunity to pop into any of our offices throughout the country. By doing your due diligence, you can find the right solution for each regional population and provide your employees with the very best healthcare, that will deliver the highest value, regardless of geography.",
      },
    ],
  },
  {
    id: 3,
    author: " Mr. Admin",
    title: "Why employer healthcare strategies must be local three",
    description:
      "The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs people in various markets, you may be familiar with a common conundrum: health care is fundamentally local.",
    date: "06 March, 2019",
    secondDescription:
      "The best employers care not only about their employees’ productivity, but their well-being. And if you’re heading up a large company that employs people in various markets, you may be familiar with a common conundrum: health care is fundamentally local. And as a result, your employees may experience benefit disparity, an issue that’s undoubtedly caused you some concern. Feeling unease is understandable, but the truth is, benefit disparity doesn’t have to be a drawback or a roadblock. Think for a moment about the other benefits you offer your employees: everything from on-site perks to commuter compensation. There’s no way you can create parity across markets for those types of benefits; so why should anxiety escalate when health care is concerned?",
    questionsList: [
      {
        question: "How local solutions solve benefit disparity",
        answer:
          "The current one-size-fits-all national strategy for health care isn’t working — we all know this. For many employers in this current climate, the typical action is to select a national insurance provider and hope that performance and delivery of care is equal in all markets. But within the current system, this isn’t possible or true; quality and cost can (and do) fluctuate from city to city and state to state. Rather than simply hoping for equity within an unequal system, start by recognizing there is always going to be some unevenness on this playing field and start searching for ways to make each market strong, stable, and self-sufficient. Offer your employees the best care that’s available in each local market. By envisioning equity through local solutions, you can start moving forward toward tangible care, quality, and value.",
      },
      {
        question: "Real examples of reimagining care",
        answer:
          "So how can you feasibly do this? One place to start is by looking to others who have started paving their own path. Take Disney for example. At the 22nd Annual Leadership Summit in San Diego, Walt Disney’s senior executive of employee health benefits, Barbara Wachsman, spoke out about the urgent need of better healthcare delivery in corporate America. And they aren’t just talking about it — Disney is restructuring its benefits programs, contracting directly with trusted, local healthcare providers to expand narrow networks and provide the best quality care. Wachsman and others in her position are demanding better value from the providers in their health plan networks to better serve their scores of employees. Walmart is yet another example of a company challenging the status quo, moving to a centers of excellence program that sends employees to the Cleveland Clinic for specific procedures, ensuring an affordable price for the company and high-quality care for employees.",
      },
      {
        question: "Research reveals innovative strategies",
        answer:
          "By searching for solutions outside the box, employers can successfully navigate a healthcare system that traditionally hasn’t suited their needs or the needs of their diverse employee populations. Onsite health centers are one option, but near-site primary care programs with integrated virtual care can be a strategic, affordable alternative solution. According to the National Business Group on Health (NBGH) 2018 Large Employers’ Health Care Strategy and Plan Design Survey, 54 percent of large employers will have on-site (or near-site) health centers in 2018 and another 11 percent are considering this by 2020. Additionally, about 25 percent of employers have on-site centers in one location only, while 22 percent of employers have on-site centers in at least 6 locations. The takeaway is that it is entirely possible to provide employees with quality, affordable care, regardless of your geographic location; the key is to shift your perspective on the current model and seek solutions that make sense for your company and your workers.",
      },
      {
        question: "Bringing care to employees nationwide",
        answer:
          "Because One Medical has worked with an array of large corporations, we understand the concerns employers have around benefit disparity. Many of our clients have office locations in cities we haven’t arrived in yet. But because we’re already in major hubs — Boston, Chicago, Los Angeles, New York, Phoenix, the San Francisco Bay Area, Seattle, and Washington, D.C. — we have plenty of overlap with a large proportion of their employees from coast to coast. And for those employees who frequently travel among major metros, they can greatly benefit from our 24/7 virtual care and the opportunity to pop into any of our offices throughout the country. By doing your due diligence, you can find the right solution for each regional population and provide your employees with the very best healthcare, that will deliver the highest value, regardless of geography.",
      },
    ],
  },
];

const BayannoBlogDetailsPage = () => {
  const params = useParams();
  const { id } = params;

  const blogDetailsObject = blogsList.find(
    (eachObject) => eachObject.id === parseInt(id)
  );

  return (
    <div className="bayanno-blog-details-bg-container">
      <div className="bayanno-blog-details-inner-bg-container">
        <Navbar />
        <div className="bayanno-blog-details-content-container">
          <section className="bayanno-blog-details-heading-container">
            <div className="container mt-4 mb-4">
              <div className="row">
                <div className="col-12 col-md-5">
                  <h1 className="bayanno-blog-details-heading">
                    {blogDetailsObject.title}
                  </h1>
                  <p className="bayanno-blog-details-description-main">
                    {blogDetailsObject.description}
                  </p>
                  <div className="d-flex align-items-center mt-4 mb-3">
                    <div className="bayanno-blog-details-date-container mr-4">
                      <i class="fa-regular fa-calendar-days mr-2 mb-2"></i>
                      <span className="mb-2">{blogDetailsObject.date}</span>
                    </div>
                    <div className="bayanno-blog-details-date-container">
                      <i class="fa-solid fa-user mr-2 mb-2"></i>
                      <span className="mb-2">{blogDetailsObject.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bayanno-blog-details-main-section">
            <div className="container">
              <div className="row">
                <p className="col-12 bayanno-blog-details-description-text">
                  {blogDetailsObject.secondDescription}
                </p>
                {blogDetailsObject.questionsList.map((eachObject) => (
                  <>
                    <h1 className="col-12 bayanno-blog-details-description-heading">
                      {eachObject.question}
                    </h1>
                    <p className="col-12 bayanno-blog-details-description-text">
                      {eachObject.answer}
                    </p>
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BayannoBlogDetailsPage;

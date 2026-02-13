import { FunctionComponent, useCallback } from 'react';
import styles from './Profile.module.css';


const Profile: FunctionComponent = () => {
  	
  	const onPortfolioItemContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.profile}>
      			<div className={styles.header}>
        				<div className={styles.navbar}>
          					<div className={styles.navbarLinks}>
            						<b className={styles.homeLink}>Home</b>
            						<div className={styles.servicesLink}>Services</div>
            						<div className={styles.servicesLink}>About me</div>
            						<div className={styles.servicesLink}>Portfolio</div>
            						<div className={styles.servicesLink}>Contact me</div>
          					</div>
          					<div className={styles.hireMeButton}>
            						<b className={styles.hireMeText}>Hire Me</b>
          					</div>
        				</div>
        				<div className={styles.mainContent}>
          					<div className={styles.introductionSection}>
            						<div className={styles.introductionText}>
              							<div className={styles.introductionHeader}>
                								<div className={styles.introductionSubheader}>
                  									<div className={styles.nameContainer}>
                    										<div className={styles.greetingText}>Hi I am</div>
                    										<b className={styles.nameText}>Khanittha khunmee</b>
                  									</div>
                  									<div className={styles.jobTitle}>UI/UX designer</div>
                								</div>
              							</div>
              							<div className={styles.descriptionText}>    I graduated from Chiang Mai University with a degree in Computer Science and have a strong interest in programming and software design. From the perspective of a UX/UI Designer, I believe that good design should enable users to interact with the system easily and intuitively, without causing confusion, while also maintaining visual appeal to attract and encourage continued engagement. From the perspective <br/>of a Programmer, I am capable of developing programs that are simple, readable, and easy to maintain. I also have a solid understanding of data structure design and the ability to apply data structures and algorithms to create efficient and systematic solutions.</div>
              							</div>
              							<div className={styles.socialMediaLinks}>
                								<div className={styles.linkedinIcon}>
                  									<div className={styles.linkedinIconChild} />
                  									<img className={styles.mingcutelinkedinLineIcon} alt="" />
                								</div>
                								<div className={styles.linkedinIcon}>
                  									<div className={styles.linkedinIconChild} />
                  									<img className={styles.mingcutelinkedinLineIcon} alt="" />
                								</div>
              							</div>
              							<div className={styles.callToActionButtons}>
                								<div className={styles.hireMeButton2}>
                  									<b className={styles.hireMeText}>Hire Me</b>
                								</div>
                								<div className={styles.downloadCvButton}>
                  									<b className={styles.hireMeText}>{`Downlead CV `}</b>
                								</div>
              							</div>
            						</div>
            						<div className={styles.photo}>
              							<img className={styles.maskGroupIcon} alt="" />
              							<div className={styles.photoChild} />
              							<img className={styles.manInBlackSuitLookingConf} alt="" />
            						</div>
          					</div>
        				</div>
        				<div className={styles.skillsSection}>
          					<div className={styles.skillsList}>
            						<div className={styles.skillItem}>
              							<img className={styles.skillIcon} alt="" />
              							<div className={styles.skillText}>
                								<b className={styles.skillPercentage}>100%</b>
                								<b className={styles.skillName}>Figma</b>
              							</div>
            						</div>
            						<div className={styles.skillItem}>
              							<img className={styles.skillIcon} alt="" />
              							<div className={styles.skillText}>
                								<b className={styles.skillPercentage}>70%</b>
                								<b className={styles.skillName}>Github</b>
              							</div>
            						</div>
            						<div className={styles.skillItem}>
              							<img className={styles.skillIcon} alt="" />
              							<div className={styles.skillText}>
                								<b className={styles.skillPercentage}>85%</b>
                								<b className={styles.skillName}>Python</b>
              							</div>
            						</div>
            						<div className={styles.skillItem}>
              							<img className={styles.skillIcon} alt="" />
              							<div className={styles.skillText}>
                								<b className={styles.skillPercentage}>60%</b>
                								<b className={styles.skillName}>HTML</b>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.portfolioSection}>
          					<div className={styles.portfolioHeader}>
            						<b className={styles.hireMeText}>Portfolio</b>
            						<div className={styles.portfolioFilters}>
              							<div className={styles.filterAll}>
                								<b className={styles.filterAllText}>All</b>
              							</div>
              							<div className={styles.filterWebsiteDesign}>
                								<b className={styles.filterAllText}>Website design</b>
              							</div>
              							<div className={styles.filterWebsiteDesign}>
                								<b className={styles.filterAllText}>App mobile design</b>
              							</div>
              							<div className={styles.filterWebsiteDesign}>
                								<b className={styles.filterAllText}>App desktop</b>
              							</div>
            						</div>
          					</div>
          					<div className={styles.portfolioItems}>
            						<div className={styles.portfolioItem} onClick={onPortfolioItemContainerClick}>
              							<img className={styles.portfolioImageIcon} alt="" />
              							<div className={styles.portfolioItemText}>
                								<b className={styles.filterAllText}>BLMS</b>
                								<b className={styles.portfolioItemCategory}>Farm</b>
              							</div>
            						</div>
            						<div className={styles.portfolioItem} onClick={onPortfolioItemContainerClick}>
              							<img className={styles.portfolioImageIcon} alt="" />
              							<div className={styles.portfolioItemText}>
                								<b className={styles.filterAllText}>CMU DELF</b>
                								<b className={styles.portfolioItemCategory}>Education</b>
              							</div>
            						</div>
            						<div className={styles.portfolioItem3}>
              							<img className={styles.portfolioImageIcon} alt="" />
              							<div className={styles.portfolioItemText}>
                								<b className={styles.filterAllText}>SM</b>
                								<b className={styles.portfolioItemCategory}>Management</b>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.footer}>
          					<div className={styles.footerLinks}>
            						<div className={styles.navbarLinks}>
              							<div className={styles.servicesLink}>Home</div>
              							<div className={styles.servicesLink}>Services</div>
              							<div className={styles.servicesLink}>About me</div>
              							<div className={styles.servicesLink}>Portfolio</div>
              							<div className={styles.servicesLink}>Contact me</div>
            						</div>
          					</div>
          					<div className={styles.footerContactInfo}>
            						<div className={styles.footerContactDetails}>
              							<div className={styles.emailInfo}>
                								<img className={styles.mailIcon} alt="" />
                								<b className={styles.hireMeText}>mathtaaa@gmail.com</b>
              							</div>
              							<div className={styles.emailInfo}>
                								<img className={styles.mailIcon} alt="" />
                								<b className={styles.hireMeText}>0634161353</b>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>);
      			};
      			
      			export default Profile ;
      			

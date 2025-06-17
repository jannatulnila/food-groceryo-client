import Banner from './Banner';
import NearlyExpairySection from '../Components/NearlyExpairySection/NearlyExpairySection';
import ExpairedFoodSection from '../Components/ExpairedFoodSection/ExpairedFoodSection';
import FoodStorageTips from '../Components/FoodStorageTips/FoodStorageTips';
import ExpiryFacts from '../Components/ExpiryFacts/ExpiryFacts';

const Home = () => {
  

    return (
        <div>
            <Banner></Banner>
            <NearlyExpairySection  />
            <ExpairedFoodSection></ExpairedFoodSection>
            <FoodStorageTips></FoodStorageTips>
            <ExpiryFacts></ExpiryFacts>
        </div>
    );
};

export default Home;
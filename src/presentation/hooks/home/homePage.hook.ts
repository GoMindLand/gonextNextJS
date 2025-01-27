import container from "@/config/container";
import {HomePageDto} from "@/application/dto/home-page.dto";
import {FetchHomePageUseCase} from "@/application/use-cases/fetch-home-page.use-case";

const getHomePage : () => Promise<HomePageDto> = async () => {
    const fetchHomePageUseCase = container.get<FetchHomePageUseCase>("FetchHomePageUseCase");
    return await fetchHomePageUseCase.execute();

}

export default getHomePage;
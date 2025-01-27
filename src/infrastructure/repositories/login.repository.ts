import axios from "axios";
import { LoginRepositoryInterface } from "@/domain/interfaces/login-repository.interface";
import {injectable} from "inversify";

@injectable()
export class LoginRepository implements LoginRepositoryInterface {
    async login(email: string, password: string): Promise<{ token: string }> {
        const response = await axios.post("/api/login", { email, password });
        return response.data;
    }
}
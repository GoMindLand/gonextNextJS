export interface LoginRepositoryInterface {
    login(email: string, password: string): Promise<{ token: string }>;
}
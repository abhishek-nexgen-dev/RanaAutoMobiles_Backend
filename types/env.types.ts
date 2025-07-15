export interface EnvTypes {
    PORT: number | undefined;
    SuperAdmin_Name: string;
    SuperAdmin_Email: string
    SuperAdmin_Password: string;
    MONGO_URI: string;
    DB_NAME: string;
    publicKey?: string;
    privateKey?: string;
    BUNNY_BUCKET_Name: string,
    BUNNY_PASSWORD: string,
    is_Development: boolean;
    BUNNY_REGION: string

}



export interface Database {
    public: {
        Tables: {
            templates: {
                Row: {
                    id: string;
                    role: string;
                    name: string;
                    description: string | null;
                    preview_image_url: string | null;
                    folder_path: string;
                    tech_stack: Record<string, any> | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    role: string;
                    name: string;
                    description?: string | null;
                    preview_image_url?: string | null;
                    folder_path: string;
                    tech_stack?: Record<string, any> | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    role?: string;
                    name?: string;
                    description?: string | null;
                    preview_image_url?: string | null;
                    folder_path?: string;
                    tech_stack?: Record<string, any> | null;
                    created_at?: string;
                };
            };
            user_sites: {
                Row: {
                    id: string;
                    user_id: string;
                    template_id: string | null;
                    data_json: Record<string, any>;
                    exported_zip_url: string | null;
                    is_published: boolean | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id: string;
                    template_id?: string | null;
                    data_json: Record<string, any>;
                    exported_zip_url?: string | null;
                    is_published?: boolean | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string;
                    template_id?: string | null;
                    data_json?: Record<string, any>;
                    exported_zip_url?: string | null;
                    is_published?: boolean | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            ai_logs: {
                Row: {
                    id: string;
                    user_id: string | null;
                    action: string | null;
                    input_data: Record<string, any> | null;
                    output_data: Record<string, any> | null;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    user_id?: string | null;
                    action?: string | null;
                    input_data?: Record<string, any> | null;
                    output_data?: Record<string, any> | null;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string | null;
                    action?: string | null;
                    input_data?: Record<string, any> | null;
                    output_data?: Record<string, any> | null;
                    created_at?: string;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
    };
}

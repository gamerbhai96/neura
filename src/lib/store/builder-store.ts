import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PortfolioData } from '../../components/templates/types';

export interface BuilderState {
    // Selected template
    selectedTemplateId: string | null;
    selectedRole: string | null;

    // Portfolio data
    portfolioData: Partial<PortfolioData>;

    // UI state
    isPreviewOpen: boolean;
    previewDevice: 'desktop' | 'tablet' | 'mobile';

    // Auto-save
    lastSaved: Date | null;
    isSaving: boolean;

    // Actions
    setSelectedTemplate: (templateId: string, role: string) => void;
    setPortfolioData: (data: Partial<PortfolioData>) => void;
    updatePortfolioField: <K extends keyof PortfolioData>(
        field: K,
        value: PortfolioData[K]
    ) => void;
    setPreviewOpen: (isOpen: boolean) => void;
    setPreviewDevice: (device: 'desktop' | 'tablet' | 'mobile') => void;
    setSaving: (isSaving: boolean) => void;
    markSaved: () => void;
    resetBuilder: () => void;
}

export const useBuilderStore = create<BuilderState>()(
    persist(
        (set) => ({
            // Initial state
            selectedTemplateId: null,
            selectedRole: null,
            portfolioData: {},
            isPreviewOpen: true,
            previewDevice: 'desktop',
            lastSaved: null,
            isSaving: false,

            // Actions
            setSelectedTemplate: (templateId, role) =>
                set({ selectedTemplateId: templateId, selectedRole: role }),

            setPortfolioData: (data) =>
                set((state) => ({
                    portfolioData: { ...state.portfolioData, ...data },
                })),

            updatePortfolioField: (field, value) =>
                set((state) => ({
                    portfolioData: { ...state.portfolioData, [field]: value },
                })),

            setPreviewOpen: (isOpen) => set({ isPreviewOpen: isOpen }),

            setPreviewDevice: (device) => set({ previewDevice: device }),

            setSaving: (isSaving) => set({ isSaving }),

            markSaved: () => set({ lastSaved: new Date(), isSaving: false }),

            resetBuilder: () =>
                set({
                    selectedTemplateId: null,
                    selectedRole: null,
                    portfolioData: {},
                    isPreviewOpen: true,
                    previewDevice: 'desktop',
                    lastSaved: null,
                    isSaving: false,
                }),
        }),
        {
            name: 'portfolio-builder-storage',
            partialize: (state) => ({
                selectedTemplateId: state.selectedTemplateId,
                selectedRole: state.selectedRole,
                portfolioData: state.portfolioData,
            }),
        }
    )
);

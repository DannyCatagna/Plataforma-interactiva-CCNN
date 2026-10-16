export interface MicroscopePart {
  id: string;
  name: string;
  system: 'optico' | 'mecanico' | 'iluminacion';
  systemName: string;
  shortDesc: string;
  fullDesc: string;
  functionDesc: string;
  coords: { x: number; y: number }; // Percentage coords on diagram
}

export interface ProtocolStep {
  number: number;
  title: string;
  shortName: string;
  instruction: string;
  teacherTip: string;
  iconName: string;
  safetyNote?: string;
}

export interface SafetyRule {
  id: number;
  rule: string;
  rationale: string;
  isImportant: boolean;
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
}

export interface SpecimenSlide {
  id: string;
  name: string;
  category: 'vegetal' | 'animal';
  origin: string;
  stain: string;
  description: string;
  hasChloroplasts: boolean;
  hasCellWall: boolean;
  realMicrographNote: string;
  magnifications: {
    [key in '40x' | '100x' | '400x']: {
      description: string;
      visibleStructures: string[];
      diameterMicrons: number;
      idealFocus: number; // 0 to 100 sweet spot
    };
  };
  labels: {
    name: string;
    description: string;
    x: number; // % in ocular circle
    y: number; // % in ocular circle
    minMag: '40x' | '100x' | '400x';
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  topic: 'microscopio' | 'seguridad' | 'celulas' | 'tejidos';
}

export interface GlossaryTerm {
  id: string;
  term: string;
  category: 'optica' | 'tecnica' | 'celular';
  categoryLabel: string;
  definition: string;
  simpleExplanation: string;
  example: string;
}

export interface Interview {
    id: string; 
    interviewer: string; 
    interviewee: string; 
    dateTime: Date; 
    notes?: string; 
    evaluation: 'Great' | 'Good' | 'Regular' | 'Bad' | 'Awfull'; 
    jobId: string; 
    candidateId: string; 
    createdAt?: Date; 
    updatedAt?: Date; 
  }
  
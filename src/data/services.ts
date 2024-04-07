import { z } from 'astro:content';

const services = [
    {
        title: 'Goal Setting and Prioritization',
        description: 'We facilitate meetings that identify priorities and set measurable goals for your institution.',
        icon: 'services/flag-point'
    },
    {
        title: 'Problem Solving',
        description: 'We help organizations identify problems and develop strategies to address them.',
        icon: 'services/lightbulb',
    },
    {
        title: 'Formulating Strategies',
        description: 'With our wealth of experience, we are able to guide clients in formulating strategies toward mission-driven results.',
        icon: 'services/brain-circuit',
    },
    {
        title: 'Data Gathering and Analysis',
        description: 'We help organizations gather data and analyze it to inform decision-making.',
        icon: 'services/bar-chart',
    },
    {
        title: 'Policy Analysis & Conflict Resolution',
        description: 'Review of current policies for consistency and make suggestions for improvements; identify areas of potential conflicts and make recommendations for changes',
        icon: 'services/heart-handshake',
    },
    {
        title: 'Program Management and Evaluation',
        description: 'Review Roles & Responsibilities of key staff members and establish a timeline for periodic assessments that lead to formal annual evaluations',
        icon: 'services/book-open-check',
    },
    {
        title: 'Technical Assistance',
        description: 'Identify the supports needed, at all levels, in the organization and provide access in a timely manner.',
        icon: 'services/hand-open',
    },
    {
        title: 'Organizational Development',
        description: 'Provide a map of the current structure and work with the leadership team to explore organizational structures that better align with the organization.Develop a plan for learning and growth of all team members.',
        icon: 'services/building',
    },
    {
        title: 'Developing Human Capital',
        description: 'Identify ways that the organization can support all personnel in their work environments.As part of the annual evaluation of team members, specific recommendations can be made for professional development to ensure maximum productivity and job satisfaction.',
        icon: 'services/people',
    },
    {
        title: 'Leadership Coaching',
        description: 'Identify those in leadership roles who may need coaching experiences to ensure that they have adequate time to reflect on their actions & behaviors, learn strategies that can boost cultural competency within the organization as well as personal success of leaders.',
        icon: 'services/medal',
    },
    // Add more services here
];

const servicesCollection = services.map(service => {
    const schema = z.object({
        title: z.string().max(65, 'Title must be 65 characters or less'),
        description: z.string(),
    });

    // Validate the service data against the schema
    schema.parse(service);

    return service;
});

export { servicesCollection };
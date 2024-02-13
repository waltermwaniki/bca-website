import { z } from 'astro:content';

const services = [
    {
        title: 'Goal Setting and Prioritization',
        description: 'We facilitate meetings that identify priorities and set measurable goals for your institution.',
    },
    {
        title: 'Formulating Strategies',
        description: 'With our wealth of experience, we are able to guide clients in formulating strategies toward mission-driven results.',
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
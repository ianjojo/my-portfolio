export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "date",
      type: "datetime",
    },

    {
      name: "description",
      type: "text",
    },

    {
      name: "link",
      type: "url",
    },
    {
      name: "projectImage",
      title: "Project image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "tags",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
      options: {
        layout: "tags",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      description: "description",
      media: "projectImage",
    },
  },
};

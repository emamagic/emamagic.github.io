import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding: 40px 20px;
    @media (max-width: 960px) {
    padding: 0px;
    }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const PublicationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 40px;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  background: ${({ theme }) => theme.card};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 15px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const ArticleTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Description = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.text_tertiary};
`;


const articles = [
    {
        id: 1,
        title: "Inner Class vs Nested Class vs Anonymous Class",
        description: "This article provides a comprehensive exploration of Java's inner classes, nested classes, and anonymous classes. Learn the differences, use cases, and practical examples to understand how and when to use each type effectively. Whether you're a beginner or an experienced developer, this guide will deepen your understanding of these essential Java concepts!",
        thumbnail: require('../../images/Classes.png'), 
        link: "https://medium.com/@emamagic/inner-class-vs-nested-class-vs-anonymous-class-deep-dive-ffd6e29bd405",
        publisher: "Published on Medium",
        date: "August 1, 2024",
    },
    {
        id: 2,
        title: "DTOs and Validation Done Right in Java",
        description: "Dive into best practices for designing and validating Data Transfer Objects (DTOs) in Java. This article covers common pitfalls, effective validation techniques, and real-world examples to ensure your DTOs are clean, efficient, and maintainable. Perfect for developers looking to enhance their application's data handling and validation processes!",
        thumbnail: require('../../images/Dto.png'),
        link: "https://medium.com/@emamagic/dtos-and-validation-done-right-in-java-d7ad34cd6d53",
        publisher: "Published on Medium",
        date: "October 31, 2024",
    },
];

const Publication = () => {
  return (
    <Container id="publications">
      <Title>Publications</Title>
      <Desc>Here are some of the articles I've written and published to share insights and tips with fellow developers.
      </Desc>
      <PublicationGrid>
        {articles.map((article) => (
          <Card key={article.id} href={article.link} target="_blank" rel="noopener noreferrer">
            <Thumbnail src={article.thumbnail} alt={article.title} />
            <Content>
              <ArticleTitle>{article.title}</ArticleTitle>
              <DetailsRow>
                <div>{article.date}</div>
                <div>{article.publisher}</div>
              </DetailsRow>
              <Description>{article.description}</Description>
            </Content>
          </Card>
        ))}
      </PublicationGrid>
    </Container>
  );
};

  

export default Publication;

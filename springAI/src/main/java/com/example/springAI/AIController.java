package com.example.springAI;

import org.springframework.ai.document.Document;
import org.springframework.ai.embedding.EmbeddingModel;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.vectorstore.VectorStore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
public class AIController {

    private final ChatClient chatClient;

    @Autowired
    @Qualifier("ollamaEmbeddingModel")
    private EmbeddingModel embeddingModel;

    @Autowired
    private VectorStore vectorStore;

    public AIController(OpenAiChatModel chatModel) {
        this.chatClient = ChatClient.create(chatModel);
    }

    @GetMapping("/api/{message}")
    public ResponseEntity<String> getAnswer(@PathVariable String message) {

        try {
            ChatResponse chatResponse = chatClient
                    .prompt(message)
                    .call()
                    .chatResponse();

            System.out.println("Model: "
                    + chatResponse.getMetadata().getModel());

            String response = chatResponse
                    .getResult()
                    .getOutput()
                    .getText();

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/api/recommend")
    public String recommend(
            @RequestParam String type,
            @RequestParam String year,
            @RequestParam String lang) {

        String temp = """
                I want to watch a {type} movie tonight with good rating,
                looking for movies around this year {year}.
                The language I'm looking for is {lang}.

                Suggest one specific movie and tell me the cast and length of the movie.

                Response format should be:
                1. Movie Name
                2. Basic Plot
                3. Cast
                4. Length
                5. IMDb Rating
                """;

        PromptTemplate promptTemplate = new PromptTemplate(temp);

        Prompt prompt = promptTemplate.create(Map.of(
                "type", type,
                "year", year,
                "lang", lang
        ));

        return chatClient
                .prompt(prompt)
                .call()
                .content();
    }

    @GetMapping("/api/embedding")
    public float[] getEmbedding(@RequestParam String text) {

        float[] embedding = embeddingModel.embed(text);

        return embedding;
    }

    @PostMapping("/api/product")
    public List<Document> getProducts(@RequestParam String text) {

        return vectorStore.similaritySearch(text);
    }







}